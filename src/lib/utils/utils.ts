// a great place to put some utility functions

// slugify -- a very simple slugify function
// takes a string and returns a slugified version
// e.g. "Hello World" => "hello-world"
export function slugify(string: string) {
	return string.replace(/\W/g, "-").replace(/--*/gi, "-").toLowerCase();
}
