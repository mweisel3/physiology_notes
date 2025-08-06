function goToParentDirectory() {
  // Get the current page's full path (e.g., /folder1/folder2/page.html)
  const currentPath = window.location.pathname;

  // Find the position of the last '/'
  const lastSlashIndex = currentPath.lastIndexOf('/');

  // Get the new path, which is everything up to the last slash
  const parentPath = currentPath.substring(0, lastSlashIndex);

  // Navigate to the new path. If the result is an empty string, go to the root '/'.
  window.location.href = parentPath || '/';
}