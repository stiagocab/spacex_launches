const { useLocation } = require("react-router-dom");

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useRouterQuery;
