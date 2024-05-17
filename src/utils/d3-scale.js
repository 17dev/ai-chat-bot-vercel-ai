import * as d3 from 'd3';

export const createScale = (domain, range) => {
  return d3.scaleLinear()
    .domain(domain)
    .range(range);
};

export const createColorScale = (domain) => {
  return d3.scaleSequential()
    .domain(domain)
    .interpolator(d3.interpolateCool);
};

export const createBandScale = (domain, range) => {
  return d3.scaleBand()
    .domain(domain)
    .range(range)
    .padding(0.1);
};

export const createTimeScale = (domain, range) => {
  return d3.scaleTime()
    .domain(domain)
    .range(range);
};