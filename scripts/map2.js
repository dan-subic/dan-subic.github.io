function Triangle() {
	this.shortSide = null;
	this.midSide = null;
	this.longSide = null;
	this.height = null;
	this.id = -1;
}

// Make a Disdyakis triacontahedron
function BasicPolyhedron() {
	// First: Create 120 triangles. Put them in an array.
	// Give each an id.
	// After that, assign each one adjacent triangles.
	// Finally, check that none are unassigned.

	var arr = [];

	// Fill array with triangles.
	var i;
	for (i=0; i<120; i++)
	{
		var tri = new Triangle();
		tri.id = i;
		arr[i] = tri;
	}

	// 
})