import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
onMounted(async () => {
try { const response = await axios.get('http://localhost:3000/api/education'); educationHistory.value
= response.data; } catch (error) { console.error(error); }
});
