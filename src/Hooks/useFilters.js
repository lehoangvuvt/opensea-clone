import { useEffect, useState } from "react";
import { useRouter } from "./useRouter";

export function useFilters() {
  const router = useRouter();
  const [queries, setQueries] = useState(new Map());
  const [currentQueryString, setCurrentQueryString] = useState(null);

  const convertQueryObjToString = (query) => {
    let queryString = "?";
    for (let key in query) {
      queryString += `${key}=${query[key]}&`;
    }
    return queryString.substring(0, queryString.length - 1);
  };

  const updateQuery = (propertyName, value) => {
    let newQueries = new Map(JSON.parse(JSON.stringify(Array.from(queries))))
    if (Array.isArray(value)) {
      newQueries.set(propertyName, value)
    } else {
      newQueries.set(propertyName, [value])
    }
    if (propertyName !== "page") {
      newQueries.delete("page")
    }
    setQueries(newQueries)
  };

  const resetFilter = (propertyName) => {
    let newQueries = new Map(JSON.parse(JSON.stringify(Array.from(queries))))
    newQueries.delete(propertyName);
    setQueries(newQueries);
  };

  const resetAllFilters = () => {
    setQueries(new Map());
  };

  useEffect(() => {
    let query = {};
    if (queries.size > 0) {
      for (let [key, value] of queries) {
        query[key] = value;
      }
      setCurrentQueryString(convertQueryObjToString(query));
    } else {
      setCurrentQueryString(" ");
    }
  }, [queries]);

  useEffect(() => {
    const query = router.query;
    let newQueries = new Map();
    if (Object.keys(query).length > 0) {
      for (let key in query) {
        const values = query[key].split(",");
        newQueries.set(key, values);
      }
      setQueries(newQueries);
    }
  }, [router.query]);

  return {
    currentQueryString,
    queries,
    updateQuery,
    resetFilter,
    resetAllFilters,
  };
}
