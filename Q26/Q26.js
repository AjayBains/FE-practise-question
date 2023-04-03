// pollyfill for getElementByCLassname()



// findByClass("a");

// will use DFS to solve

const getByClassName = (root, c) => {
  const search = (node) => {
    let result = []; //array of nodes that has the class

    if (node.classList.contains(c)) {
      result.push(node);
    }

    for (let child of node.children) {
      const res = search(child);
      result = [...result, ...res];
    }
    return result;
  };
  return search(root);
};

const root = document.getElementById("root");
console.log(getByClassName(root, "a"));
