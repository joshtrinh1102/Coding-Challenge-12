function main(){
    d3.dsv(",","../data/mock_stock_data (1).csv").then(
        function (data) {
            for (let index = 0; index <d.length; index++){
                const element = d[index];
                console.log(element.Date);
                console.log(element.Stock);
                return `${d.Stock} - Date: ${d.Date} - Price: ${d.Price} `;
        }
    }
).catch(function(error){
        console.log(error);
    });
//Parse and filter csv data
const svgWidth = 600;
const svgHeight= 600;
const barHeight= 20;
const barMargin=1;
const svg = d3.select("body").append("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight);

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth -60])
    
svg.append("g")
    .attr("transform", `translate(50,)`)
    .call(d3.axisBottom(xScale))

svg.selectAll("g.bar")
    .data(data)
    .enter().append("g")
    .attr("transform", (d,i) => `translate(60, ${i * (barHeight + barMargin)})`)
    .each(function(d,i){
        const group = d3.select(this);

        group.append("rect")
        .attr("width",0)
        .attr("height", barHeight - barMargin)
        .attr("fill","firebrick")
        .transition()
        .duration(1000)
        .attr("width", xScale(d));

        group.append("text")
        .attr("x", xScale(d) +3)
        .attr("y", barheight /2)
        .attr("dy" , ".35em")
        .text (d)
    });
    svg.selectAll("g.bar rect")
    .on("mouseover", function () {
        d3.select(this).attr("fill", "green");
    })
    .on("mouseover", function () {
            d3.select(this).attr("fill", "firebrick");
    })
}

 
    

