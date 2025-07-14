export function slugify(name) {
	return name
		.normalize("NFD") // Normalize Unicode characters
		.replace(/[\u0300-\u036f]/g, "") // Remove accents
		.replace(/đ/g, "d") // Vietnamese specific
		.replace(/Đ/g, "d")
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/[^a-z0-9\-]/g, "") // Remove invalid characters
		.replace(/\-+/g, "-"); // Collapse multiple hyphens
}
