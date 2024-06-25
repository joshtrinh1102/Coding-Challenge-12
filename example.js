function main(){
    d3.dsv(",",'../data/mock_stock_data(1).csv').then(
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
    }
    
