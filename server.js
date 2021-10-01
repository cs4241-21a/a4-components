const express = require('express'),
      app = express()

const appdata = [
  {
    'hotel': 'Best Resort',
    'location': 'Miami',
    'cleanliness': 9,
    'service': 8,
    'amenity': 7,
    'overallexperience': 8,
  },
  {
    'hotel': 'Roadside Inn',
    'location': 'Boston',
    'cleanliness': 5,
    'service': 5,
    'amenity': 5,
    'overallexperience': 5,
  },
];

app.use(express.json())

app.use(express.static('build'))

const getOverallScore = function (
  cleanlinessScore,
  serviceScore,
  amenityScore
) {
  let sum = cleanlinessScore + serviceScore + amenityScore;
  return Math.round((sum / 3) * 10) / 10;
};

app.post('/table', (request, response) => response.json(appdata))

app.post('/submit', function(request, response){
  const overallScore = getOverallScore(
    request.body.cleanliness,
            request.body.service,
            request.body.amenity
          );
          appdata.push({
            hotel: request.body.hotel,
            location: request.body.location,
            cleanliness: request.body.cleanliness,
            service: request.body.service,
            amenity: request.body.amenity,
            overallexperience: overallScore,
          });
          response.json(appdata)
})

app.post('/delete', function(request, response){
  const overallScore = getOverallScore(
    request.body.cleanliness,
    request.body.service,
    request.body.amenity
  );
  request.body['overallexperience'] = overallScore;
  let index = -1;
  for (let i = 0; i < appdata.length; i++) {
    if (JSON.stringify(appdata[i]) === JSON.stringify(request.body)) {
      index = i;
    }
  }
  appdata.splice(index, 1);
  response.json(appdata)

})

app.post('/edit', function(request, response){
  
          const overallScoreForOriginal = getOverallScore(
            request.body[0].cleanliness,
            request.body[0].service,
            request.body[0].amenity
          );
          const overallScore = getOverallScore(
            request.body[1].cleanliness,
            request.body[1].service,
            request.body[1].amenity
          );
          request.body[0]['overallexperience'] = overallScoreForOriginal;
          let index = -1;
          for (let i = 0; i < appdata.length; i++) {
            if (JSON.stringify(appdata[i]) === JSON.stringify(request.body[0])) {
              index = i;
            }
          }
          appdata.splice(index, 1, {
            hotel: request.body[1].hotel,
            location: request.body[1].location,
            cleanliness: request.body[1].cleanliness,
            service: request.body[1].service,
            amenity: request.body[1].amenity,
            overallexperience: overallScore,
          })

          response.json(appdata)
})

app.listen( 3000 )
