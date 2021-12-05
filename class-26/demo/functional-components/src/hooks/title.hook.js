export default function useTitle() {
  const changedTitle = (myTitle) => (document.title = myTitle);
  return changedTitle;
}