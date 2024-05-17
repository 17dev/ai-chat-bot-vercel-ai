import * as d3 from 'd3';

export const createChart = (data, chartType) => {
  const svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  switch(chartType) {
    case 'bar':
      createBarChart(svg, data);
      break;
    case 'line':
      createLineChart(svg, data);
      break;
    default:
      console.error('Invalid chart type');
  }
}

const createBarChart = (svg, data) => {
  const xScale = d3.scaleBand()
    .range([0, 500])
    .domain(data.map((d) => d.label))
    .padding(0.4);
  
  const yScale = d3.scaleLinear()
    .range([500, 0])
    .domain([0, d3.max(data, (d) => d.value)]);

  svg.append("g")
    .attr("transform", "translate(0," + 500 + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .call(d3.axisLeft(yScale));

  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.label))
    .attr("y", (d) => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => 500 - yScale(d.value));
}

const createLineChart = (svg, data) => {
  const xScale = d3.scaleTime()
    .range([0, 500])
    .domain(d3.extent(data, (d) => d.date));

  const yScale = d3.scaleLinear()
    .range([500, 0])
    .domain([0, d3.max(data, (d) => d.value)]);

  svg.append("g")
    .attr("transform", "translate(0," + 500 + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .call(d3.axisLeft(yScale));

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
    );
}