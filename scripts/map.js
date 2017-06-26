var d, context, id;

function randFloat(avg, dev)
{
	var randInt = Math.floor(Math.random() * 100);
	var result;
	if (randInt%2 == 0)
		result = avg + Math.random() * dev;
	else
		result = avg - Math.random() * dev;
	return result;
}

function generateData(mapWidth, mapHeight, seeds, seedDev, localDev, smooth)
{
	// Create empty map full of 0's, false values
	var heightMap = array2D(mapHeight,mapWidth, 0);
	var trackMap = array2D(mapHeight, mapWidth, false);

	// Fill seed points
	var i;
	for (i=0; i<seeds; i++)
	{
		var seedX = Math.floor(Math.random() * mapWidth);
		var seedY = Math.floor(Math.random() * mapHeight);
		// In this version, average seed height is always 0
		heightMap[seedY][seedX] = randFloat(0, seedDev);
		trackMap[seedY][seedX] = true;

		var str = "Seed: X=" + seedX + " Y=" + seedY + " Set to " + heightMap[seedY][seedX];
		console.log(str);
	}
	//testArray(trackMap);

	// Generate terrain from seed points
	var allFilled = false;

	var tempTrackMap = copyArray2D(trackMap);
	var tempHeightMap = copyArray2D(heightMap);

	while(!allFilled)
	{
		allFilled = true;
		var i, j;
		for (i=0; i<mapHeight; i++)
		{
			for (j=0; j<mapWidth; j++)
			{
				// Skip a cell if it's already been set
				if (trackMap[i][j])
					continue;

				allFilled = false;

				// Check surrounding cells. Wrap around edges of map.
				var mean = 0;
				var count = 1;

				var hor, vert;

				for (vert = Math.max(0, i-1); vert<Math.min(i+2, mapHeight); vert++)
				{
					for (hor = j-1; hor<= j+1; hor++)
					{
						var wMod;
						if (hor<0)
							wMod = mapWidth-1;
						else if (hor >= mapWidth)
							wMod = 0;
						else
							wMod = hor;

						if (trackMap[vert][wMod])
						{
							count++;
							mean += heightMap[vert][wMod];
						}
					}
				}

				// In this condition, an adjacent space has been set. Set this space
				if (count > 1)
				{
					mean = mean/count;
					tempHeightMap[i][j] = mean + randFloat(mean,localDev);
					tempTrackMap[i][j] = true;

					//var str = "X=" + j + " Y=" + i + " Set to " + tempHeightMap[i][j];
					//console.log(str);
				}

			}
		}

		// Update track and height at end of each iteration
		trackMap = copyArray2D(tempTrackMap);
		heightMap = copyArray2D(tempHeightMap);
		//testArray(trackMap);
	}

	// Now, just smooth out the results a little...
	if (smooth === true)
	{
		var tempHeightMap2 = copyArray2D(heightMap);

		var i, j;
		for (i=0; i<mapHeight; i++)
		{
			for (j=0; j<mapWidth; j++)
			{

				// Check surrounding cells. Wrap around edges of map.
				var mean = tempHeightMap2[i][j];
				var count = 1;

				var hor, vert;

				for (vert = Math.max(0, i-1); vert<Math.min(i+2, mapHeight); vert++)
				{
					for (hor = j-1; hor<= j+1; hor++)
					{
						var wMod;
						if (hor<0)
							wMod = mapWidth-1;
						else if (hor >= mapWidth)
							wMod = 0;
						else
							wMod = hor;

						count++;
						mean += tempHeightMap2[vert][wMod];
					}
				}

				heightMap[i][j] = mean/count;

			}
		}
	}

	return heightMap;

}

function testArray(arr)
{
	//process.stdout.write("hello: ");
	console.log("Showing 2d array:");
	var str = "";

	var i, j;
	for (i=0; i<arr.length; i++)
	{
		for (j=0; j<(arr[0]).length; j++)
		{
			var bool;
			if (arr[i][j])
				bool = 1;
			else
				bool = 0;
			str += bool + " ";
		}
		console.log(str);
		str = "";
	}
}

// Create 2d array filled with val's
/*function array2D(h, w, val)
{
	var row = [];
	var i, j;
	for (i=0; i<w; i++)
	{
		row[i] = val;
	}
	var arr = [];
	for (j=0; j<h; j++)
	{
		arr[j] = row;
	}
	return arr;
}*/

function array2D(h, w, val)
{
	var arr = [];
	var j,i;
	for (j=0; j<h; j++)
	{
		arr[j] = [];
		for (i=0; i<w; i++)
		{
			arr[j][i] = val;
		}
	}
	return arr;
}

function copyArray2D(arr)
{
	var newArr = [];
	var j,i;
	for (j=0; j<arr.length; j++)
	{
		newArr[j] = [];
		for (i=0; i<arr[j].length; i++)
		{
			newArr[j][i] = arr[j][i];
		}
	}
	return newArr;
}

function generateMap()
{
	var canvas = document.createElement('canvas');
	canvas.id     = "CursorLayer";
	canvas.width  = document.getElementById("widthForm").value;
	canvas.height = document.getElementById("heightForm").value;
	canvas.style.border   = "1px solid #ffffff";

	// Get other inputs
	var seaLevel = document.getElementById("seaForm").value;
	var seedNum = document.getElementById("platesForm").value;
	var seedDev = document.getElementById("conDevForm").value;
	var localDev = document.getElementById("localDevForm").value;
	var smooth = document.getElementById("smoothForm").checked;



	context = canvas.getContext("2d");

	id = context.createImageData(canvas.width,canvas.height);  // only do this once per page
	d  = id.data;						// only do this once per page

	// Loading msg
	var msg = document.createElement('div');
	msg.innerHTML = "Loading...";

	if (cv.hasChildNodes())
	{
 	   cv.removeChild(cv.childNodes[0]);
 	}

	cv.appendChild(msg);

	cv.removeChild(cv.childNodes[0]);

	cv.appendChild(canvas);

	// Generate map
	var map = generateData(canvas.width, canvas.height, seedNum, seedDev, localDev, smooth);

	var x, y;
	for (x = 0; x < canvas.width; x++) {
		for (y = 0; y < canvas.height; y++) {
			// Simple version - draw blue if equal or under sea level, green if over
			if (map[y][x] > seaLevel)
			{
				d[0]   = 0; // r
				d[1]   = 255; // g
				d[2]   = 0; // b
				d[3]   = 255; // a
			}
			else
			{
				d[0]   = 0; // r
				d[1]   = 0; // g
				d[2]   = 255; // b
				d[3]   = 255; // a
			}
			context.putImageData( id, x, y );
		}
	}

	// try this
	/*var testarr = array2D(10,10,0);
	var v;
	for(v=0; v<10; v++)
	{
		testarr[v][v] = 40;
	}
	testArray(testarr);*/
	
 	/*cv.removeChild(cv.childNodes[0]);

	cv.appendChild(canvas);*/
}