const express = require("express") ;
const axios = require("axios") ;
const cors = require('cors') ;

const app = express() ;
app.use(cors());

app.get('/:username' , async (req,res)=>{  
    const username = req.params.username ;
    //800 - 0.5 , increment + 0.5(on every 100 rating inc from 800)
    // for each contest give 2 points(just for giving the contest)

    //PENDING
    // score acoording to rank percentile(contest)
    // try streak logic -> streak
    // create a map -> (date , numberOfProblems)
    // give size of map in response
    // add current rating to score
    try {
    const data = await axios.get(` https://codeforces.com/api/user.status?handle=${username}`) ;
    const currRatingResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`) ;
    let score = (currRatingResponse.data.result[0].rating?currRatingResponse.data.result[0].rating : 0) ;
    const arr = data.data.result;
    let uniqueProblems = new Set() ;
    let numberOfContests = new Set();
    let freqMap = new Map() ;
    const contributionScoreResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`) ;
    const profileImg = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
    const contributionScore = contributionScoreResponse.data.result[0].contribution ;
    const img  = profileImg.data.result[0].titlePhoto;
    // problems that are accepted
    const newArr = arr.filter((submission)=>{
        return (submission.verdict ==='OK') ;
    })
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i].problem.rating) {
        score = score + ((newArr[i].problem.rating -700)/100 * 1 );
        }
        const problemId = `${newArr[i].problem.contestId}${newArr[i].problem.index}`;
        if(newArr[i].author.participantType == "CONTESTANT") {
            numberOfContests.add(newArr[i].contestId) ;
        }
        uniqueProblems.add(problemId);
    }
    score += numberOfContests.size * 2 ;
    score +=(contributionScore>0? contributionScore*50: 0) ;

    for(let i=0 ; i<newArr.length ; i++){
        const myDate = new Date(newArr[i].creationTimeSeconds*1000)
        const str = myDate.toDateString() ;
        if(freqMap.has(str)) {
            freqMap.set(str, freqMap.get(str) + 1) ;
        }
        else {
            freqMap.set(str , 1) ;
        }
    }

    let freqArray = Array.from(freqMap) ;

    res.json({
        problemsSolved : uniqueProblems.size,
        score : Math.ceil(score), 
        numberOfContests : numberOfContests.size ,
        img : img,
        heatMap : freqArray
    })
    
    }
    catch(e) {
        res.json({score : -1})
    }
})

app.listen(3000);

