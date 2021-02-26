import routePaths, { nestedLandingPaths } from '../constants/routePaths';

const validatePath = () => {
  const pathName = window.location.pathname;
  const regex = /^[a-z0-9-]+$/i;
  const currentNestedPath = getNestedPath(pathName);
  if (!currentNestedPath) return false;

  let forwardSlashCount = 0;
  let pathParam;

  for (let i = 0; i < pathName.length; i++) {
    if (pathName[i] === '/') {
      forwardSlashCount += 1;
      if (forwardSlashCount === 3) {
        pathParam = pathName.slice(i + 1);
        break;
      }
    }
  }

  if (!pathParam) return false;
  return (
    regex.test(pathParam) &&
    pathName.includes(routePaths.landing + currentNestedPath)
  );
};

export const getNestedPath = (fullPath) =>
  nestedLandingPaths.find((nestedPath) => fullPath.includes(nestedPath));

export default validatePath;
