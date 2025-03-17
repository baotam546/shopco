import axiosClient from './axiosClient';

const quizService = {
    getQuestions: async () => {
        try {
            const response = await axiosClient.get('/api/Quiz/Questions');
            console.log("Fetched Quiz Data:", response);

            // Kiểm tra nếu API trả về object có "$values"
            if (response.$values && Array.isArray(response.$values)) {
                return response.$values.map(q => ({
                    id: q.id,
                    questionText: q.questionText,
                    answers: q.answers?.$values || [] // Lấy danh sách câu trả lời nếu có
                }));
            }

            throw new Error("API response is not an array");
        } catch (error) {
            console.error("Error fetching quiz data:", error);
            return [];
        }
    },

    getAnswers: async () => {
        try {
            const response = await axiosClient.get('/api/QuizAnswers');
            return response;
        } catch (error) {
            console.error('Error fetching answers:', error);
            return [];
        }
    },

    saveQuizResult: async (requestData) => {
        try {
            // Gọi API /api/Quiz/submit với toàn bộ requestData
            const response = await axiosClient.post('/api/Quiz/submit', requestData);
            return response;
        } catch (error) {
            console.error('Error saving quiz result:', error);
            throw error;
        }
    }
};

export default quizService; 



