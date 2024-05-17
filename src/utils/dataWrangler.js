import * as d3 from 'd3';

export const wrangleData = async (data) => {
  const parsedData = d3.csvParse(data);
  return parsedData;
};

export const generateChart = async (data, question) => {
  // Wrangle data based on the question
  const wrangledData = await wrangleData(data, question);

  // Generate chart with d3
  const chart = d3.select('#chart')
    .selectAll('div')
    .data(wrangledData)
    .enter()
    .append('div')
    .style('width', d => `${d.value * 10}px`)
    .text(d => d.name);

  return chart;
};