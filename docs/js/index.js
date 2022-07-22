// Graph
const root = d3.hierarchy(data); // data.js
const nodes = root.descendants();
const links = root.links();
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(node => node.id).distance(50).strength(1))
    .force("charge", d3.forceManyBody().strength(-100))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

const drag = simulation => {
    const start = (e, node) => {
        if (!e.active) simulation.alphaTarget(0.3).restart();
        node.fx = node.x;
        node.fy = node.y;
    };
    const end = (e, node) => {
        if (!e.active) simulation.alphaTarget(0);
        node.fx = null;
        node.fy = null;
    };
    const drag = (e, node) => {
        node.fx = e.x;
        node.fy = e.y;
    }
    return d3.drag()
        .on("start", start)
        .on("end", end)
        .on("drag", drag);
}

const tree = d3.select("#graph-svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

const stroke = tree.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line");

const circle = tree.append("g")
    .attr("fill", "#FBF8C1")
    .attr("stroke", "#FBF8C1")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("fill", node => node.data.url ? null : "#282828")
    .attr("stroke", node => node.data.url ? null : "#282828")
    .attr("r", 3.5)
    .call(drag(simulation));

const label = tree.selectAll()
    .data(nodes)
    .enter()
    .append("a")
    .attr("xlink:href", node => node.data.url)
    .append("text")
    .text(node => node.data.name)
    .style("text-anchor", "middle")
    .style("fill", "#555")
    .style("font-family", "Fredoka+One")
    .style("font-size", 10);

circle.append("title")
    .text(n => n.data.name);

simulation.on("tick", () => {
    stroke
        .attr("x1", node => node.source.x)
        .attr("y1", node => node.source.y)
        .attr("x2", node => node.target.x)
        .attr("y2", node => node.target.y);

    circle
        .attr("cx", node => node.x)
        .attr("cy", node => node.y);

    label
        .attr("x", node => node.x)
        .attr("y", node => node.y - 5);
});

// Other components
const menuRight = document.querySelector(".menu-right");
const menuRightBtn = document.querySelector(".menu-right-btn");

const menuLeft = document.querySelector(".menu-left");
const menuLeftBtn = document.querySelector(".menu-left-btn");

const show = (page, e) => {
    if (page.classList.contains("show")) {
        hide(page, e)
    } else {
        page.classList.add("show");
        document.body.style.overflow = "hidden";
    }
};

const hide = (page, e) => {
    page.classList.remove("show");
    e.stopPropagation();
    document.body.style.overflow = "auto";
}

menuRightBtn.addEventListener("click", show.bind(null, menuRight), false);
menuLeftBtn.addEventListener("click", show.bind(null, menuLeft), false);
