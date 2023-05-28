import { Box, useTheme } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import HomeTemplate from './HomeTemplate';
import HSIMAGE from '../../assests/image/Higher-Study-Background.png'
import LGIMAGE from '../../assests/image/background-language.png'
import JOBIMAGE from '../../assests/image/Find-a-job.png'
import LIFEIMAGE from '../../assests/image/Background-lifestyle.png'

const Home = () => {
    const higherStudyContent = ['Workshop on Masters in Germany', 'Workshop on Erasmus Mundus Scholarship']
    const languageContent = ['German Language A1.1 ~ A2.2']
    const jobContent = ['Free workshop on Job in Germany']
    const lifeContent = ['Free workshop on Lifestyle in Germany']
    const theme = useTheme();
    const style = {
        background: '#f7f4f2',
        boxShadow: `0px 0px 10px ${theme.palette.primary.main}`
    }
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Banner style={style} />
            <HomeTemplate style={style} title={'HIGHER STUDY'} content={higherStudyContent} bg={HSIMAGE} />
            <HomeTemplate style={style} title={'LANGUAGE'} content={languageContent} bg={LGIMAGE} />
            <HomeTemplate style={style} title={'FIND A JOB'} content={jobContent} bg={JOBIMAGE} />
            <HomeTemplate style={style} title={'LIFESTYLE'} content={lifeContent} bg={LIFEIMAGE} />
        </Box>
    );
};

export default Home;