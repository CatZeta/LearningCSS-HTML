import { ref } from 'vue';


export default function useStocks() {
    const stocks = ref([]);


    stocks.value = [
        { "id": 1, "company": "EDP", "percentage": 5.2 },
        { "id": 2, "company": "GALP", "percentage": 3.4 },
        { "id": 3, "company": "BCP", "percentage": -1.8 },
        { "id": 4, "company": "JMT", "percentage": 4.1 },
        { "id": 5, "company": "EDPR", "percentage": -2.1 },
        { "id": 5, "company": "NOS", "percentage": 6.3 }
      ]
    return {
        stocks
    };
}
