
var notPresent = [];
var state = [];

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
var ass = Create2DArray(1000);
var cru = Create2DArray(1000);
var dea = Create2DArray(1000);
var dow = Create2DArray(1000);
var imm = Create2DArray(1000);
var ins = Create2DArray(1000);
var kid = Create2DArray(1000);
var rap = Create2DArray(1000);
var imp = Create2DArray(1000);
var tot = Create2DArray(1000);

	d3.select("#mapcharts").select("svg").select("text.title")
		.data([1])
		.enter()
		.append("text")
		.attr("class", "title")
		.text('India : Crime against Women')
		.attr("font-family", "sans-serif")
		.attr("x", 100)
		.attr("y", 1000)
		.attr("font-size", "20px")
		.attr("fill", "red");
		
	var div = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
	
	var color = d3.scale.category20();
	// console.log(color(5));
	var max = d3.max(tot, function(array) {
      return d3.max(array);
    });

	var min = d3.min(tot, function(array) {
      return d3.min(array);
    });


$('input[type=radio]').on('click', function() {	
var color = d3.scale.category20b();
d3.selectAll('path').each(function(d,i){
    d3.select(this).attr('fill', color(i));
});
   
    var m = d3.map(data, function(d) { 
             if(d.Year == $("input[name=Year]:checked").val()){
                return d.STATEUTS.toUpperCase(); 
            }});	


    var el = d3.select("body").selectAll("path")
            .on("mouseover", function(d,i) { 
        
        var id = d3.select(this).attr('id');
        if (m.has(id)){      
            var d = m.get(id);
            //Display of Data on mouse hover		
            div.transition().duration(100).style("opacity", .75);      
            div.html( "<bold><br/>"+ d.STATEUTS +"</bold><br/>"+"<br/>"
                     +"Assault : "+ d.Assault +"<br/>"
                     +"Cruelty : "+ d.Cruelty +"<br/>"
                     +"Dowry Death : "+ d.Dowry +"<br/>"
                     +"Dowry Act : "+ d.Prohibition +"<br/>"
                     +"Immoral : "+ d.Immoral +"<br/>"
                     +"Importation of girl : "+ d.Importation +"<br/>"
                     +"Insult : "+ d.Insult +"<br/>"
                     +"Kidnapping,Abduction : "+ d.Kidnapping +"<br/>"
                     +"Rape : "+ d.Rape +"<br/>"
                     +"Total : "+ d.Total +"<br/>"
                    )
            .style("left",(d3.event.pageX-50) + "px")
            .style("top", (d3.event.pageY-132) + "px")
            .style("background-color", color(i));
        }
    })                  
			.on("mouseout", function(d) {       
				div.transition()        
				.duration(500)      
				.style("opacity", 0)
			});
});
         

    var canvasWidth = 600, //width
      canvasHeight = 600,
   //height
      outerRadius = 200,   //radius
      color = d3.scale.category20c(); //builtin range of colors

        dataSet = [
      {
        "label": "Assault on women ",
        "value": 500,
        "color": "#1ee675"
      },
{
        "label": "Dowry Deaths",
        "value": 300,
        "color": "#44b9ae"
      },
      {
        "label": "Cruelty",
        "value": 200,
        "color": "#7b37c0"
      },
      
      {
        "label": "Dowry Prohibition Act",
        "value": 300,
        "color": "#bca349"
      },
      {
        "label": "Immoral Traffic (P) Act",
        "value": 800,
        "color": "#8b6834"
      },
      {
        "label": "Importation of Girls",
        "value": 600,
        "color": "#cc9fb0"
      },

{
        "label": "Kidnapping and Abduction",
        "value": 700,
        "color": "#cc9fb0"
      },
{
        "label": "Total Crimes against Women",
        "value": 400,
        "color": "#cc9fb0"
      },

      {
        "label": "Insult to modest",
        "value": 300,
        "color": "#7c9058"
      }
    ];
    
    var vis = d3.select("#piechart")
      .append("svg:svg") //create the SVG element inside the <body>
        .data([dataSet]) //associate our data with the document
        .attr("width", canvasWidth) //set the width of the canvas
        .attr("height", canvasHeight) //set the height of the canvas
        .append("svg:g") //mak0e a group to hold our pie chart
        .attr("class", "pie")
        .attr("transform", "translate(" + 1.5*outerRadius + "," + 1.5*outerRadius + ")") // relocate center of pie to 'outerRadius,outerRadius'

    // This will create <path> elements for us using arc data...
    var arc = d3.svg.arc()
      .outerRadius(outerRadius);

    var pie = d3.layout.pie() //this will create arc data for us given a list of values
      .value(function(d) { return d.value; }) // Binding each value to the pie
      .sort( function(d) { return null; } );

    // Select all <g> elements with class slice (there aren't any yet)
    var arcs = vis.selectAll("g.slice")
      // Associate the generated pie data (an array of arcs, each having startAngle,
      // endAngle and value properties) 
      .data(pie)
      // This will create <g> elements for every "extra" data element that should be associated
      // with a selection. The result is creating a <g> for every object in the data array
      .enter()
      // Create a group to hold each slice (we will have a <path> and a <text>
      // element associated with each slice)
      .append("svg:g")
      .attr("class", "slice");    //allow us to style things in the slices (like text)

    arcs.append("svg:path")
      //set the color for each slice to be chosen from the color function defined above
      .attr("fill", function(d, i) { return color(i); } )
      //this creates the actual SVG path using the associated data (pie) with the arc drawing function
      .attr("d", arc);

var labelr = outerRadius+60;

//Draw labels

arcs.append("svg:text")
    .attr("text-anchor", "middle") //center the text on it's origin
    .style("fill", "Purple")
    .style("font", " 12px Helvetica Neue")
    .text(function(d, i) { return dataSet[i].label; }) 
    .attr("x", function(d) {
        var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
        d.cx = Math.cos(a) * (labelr - 75);
        return d.x = Math.cos(a) * (labelr - 20);
    })
    .attr("y", function(d) {
        var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
        d.cy = Math.sin(a) * (labelr - 75);
        return d.y = Math.sin(a) * (labelr - 20);
    })
    .each(function(d) {      
        var bbox = this.getBBox();
        d.sx = d.x - bbox.width/2 - 2;
        d.ox = d.x + bbox.width/2 + 2;
        d.sy = d.oy = d.y + 5;
    });

//Draw pointer lines

arcs 
  .append("path")
  .attr("class", "pointer")
  .style("fill", "none")
  .style("stroke", "black")
  .attr("d", function(d) {     
    if(d.cx > d.ox) {
        return "M" + d.sx + "," + d.sy + "L" + d.ox + "," + d.oy + " " + d.cx + "," + d.cy;
    } else {
        return "M" + d.ox + "," + d.oy + "L" + d.sx + "," + d.sy + " " + d.cx + "," + d.cy;
    }
  });


    // Add a magnitude value to the larger arcs, translated to the arc centroid and rotated.
    arcs.filter(function(d) { return d.endAngle - d.startAngle > .2; }).append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      //.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")"; })
      .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.outerRadius = outerRadius; // Set Outer Coordinate
        d.innerRadius = outerRadius/2; // Set Inner Coordinate
        return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")";
      })
      .style("fill", "Black")
      .style("font", "bold 13px Sans seriff")
      .text(function(d) { return d.data.value; });

    // Computes the angle of an arc, converting from radians to degrees.
    function angle(d) {
      var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
      return a > 90 ? a - 180 : a;
    }