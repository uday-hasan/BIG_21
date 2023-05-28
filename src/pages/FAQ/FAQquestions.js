import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

const FAQquestions = ({ question }) => {
    const { id, title, startContent, endContent, contentChildren, contentList } = question
    return (
        <div>
            <Accordion sx={{ margin: '0.5em 0' }}>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: '700', fontSize: '1.1em', color: '#40a9ff' }}>{id}. &nbsp;{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontWeight: '600', fontSize: '0.9em' }}>
                        {true && startContent}
                    </Typography>
                    <Box>
                        {
                            contentChildren && contentChildren.map(child => (
                                <Box key={child.title}>
                                    <Typography sx={{ fontWeight: 'bold', }}  >
                                        &#x2022; &nbsp;
                                        {
                                            child.title
                                        }
                                    </Typography>
                                    <Typography>
                                        {
                                            child.content
                                        }
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box>
                        {
                            contentList && contentList.map(list => <Typography key={list}>
                                &#x2022; &nbsp;
                                {list}
                            </Typography>)
                        }
                    </Box>
                    <Typography>
                        {true && endContent}
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div >
    );
};

export default FAQquestions;