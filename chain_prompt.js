function toKebabCase(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/^-+|-+$/g, '');
}