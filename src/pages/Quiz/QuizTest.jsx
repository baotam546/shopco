import React, { useEffect, useState } from 'react';
import quizService from '../../apis/quizService';
import userService from '../../apis/userService';
import { Card, CardContent, FormControl, FormControlLabel, Radio, Button, Typography } from '@mui/material';

const QuizTest = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const questionResponse = await quizService.getQuestions();
                console.log("Questions:", questionResponse);
                setQuestions(questionResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAnswerSelect = (questionId, answerId) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const handleSubmit = async () => {
        if (Object.keys(selectedAnswers).length !== questions.length) {
            alert("Vui lòng chọn câu trả lời cho tất cả các câu hỏi trước khi xem kết quả.");
            return;
        }

        try {
            // Lấy userId từ người dùng đăng nhập
            const currentUser = userService.getCurrentUser();
            const userId = currentUser ? currentUser.userId : null;
            
            if (!userId) {
                alert("Bạn cần đăng nhập để sử dụng tính năng này");
                return;
            }

            // Format responses theo đúng cấu trúc API yêu cầu
            const requestData = {
                userId: userId,
                responses: Object.entries(selectedAnswers).map(([questionId, selectedAnswerId]) => ({
                    questionId: parseInt(questionId),
                    selectedAnswerId: selectedAnswerId
                }))
            };

            // Save quiz results and get skin type from backend
            const response = await quizService.saveQuizResult(requestData);
            console.log('Quiz results saved successfully');
            
            // Set results from backend response
            setResults([response.skinType]);
        } catch (error) {
            console.error('Error saving quiz results:', error);
            alert('Có lỗi xảy ra khi lưu kết quả. Vui lòng thử lại.');
        }
    };

    return (
        <div style={{ backgroundColor: '#f5e1d0', padding: '20px', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontSize: '2rem', color: '#003366' }}>
                Da Của Bạn Là...?
            </Typography>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <Card key={question.id} sx={{ marginBottom: 2, backgroundColor: '#ECDEB9' }}> 
                        <CardContent>
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', color: '#003366' }}>
                                {question.questionText}
                            </Typography>
                            <FormControl component="fieldset">
                                {question.answers.map((answer) => (
                                    <FormControlLabel
                                        key={answer.answerId}
                                        control={
                                            <Radio
                                                checked={selectedAnswers[question.id] === answer.answerId}
                                                onChange={() => handleAnswerSelect(question.id, answer.answerId)}
                                                value={answer.answerId}
                                            />
                                        }
                                        label={answer.answerText}
                                    />
                                ))}
                            </FormControl>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="h6" sx={{ textAlign: 'center', color: '#003366' }}>
                    Đang tải câu hỏi...
                </Typography>
            )}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Xem Kết Quả
            </Button>

            {results.length > 0 && (
                <div>
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        <span style={{ color: '#003366' }}>Da của bạn là: </span>
                        <span style={{ color: '#d32f2f' }}>{results.join(' hoặc ')}</span>
                        <span style={{ color: '#003366' }}>, hãy xem quy trình chăm sóc da và chọn sản phẩm phù hợp nhé!</span>
                    </Typography>
                </div>
            )}
        </div>
    );
};

export default QuizTest;
                