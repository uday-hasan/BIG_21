import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import thumb from '../../assests/image/thumb.png'
import { AiOutlineArrowDown } from 'react-icons/ai'
import FAQquestions from './FAQquestions';
const FAQ = () => {
    // const questions = useLoaderData();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('questions.json').then(res => res.json()).then(data => {
            setQuestions(data);
            console.log(data);
        }
        )
        setLoading(false);
    }, [])

    if (loading) return <h1>Loading</h1>

    return (
        <Box sx={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>

            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={thumb} alt="" style={{ maxWidth: '300px' }} />
                    <h2>Everything you need to come to Germany</h2>
                </Box>
                <Box sx={{ margin: '0.6em 0' }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<AiOutlineArrowDown />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ fontWeight: '700', fontSize: '1.7em' }}>Language BIG</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                questions?.map(question => <FAQquestions key={question.id} question={question} />)
                            }
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>

        </Box>
    );
};

export default FAQ;