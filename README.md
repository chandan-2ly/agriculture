Prototype for a real-time crop recommendation algorithm in Python using Machine Learning and Data Analytics.
This work presents a system, in form of a website.
The business logic in Python uses Machine Learning techniques in order to predict the most profitable crop in the forecasted weather and soil conditions at a specified location.
The proposed system will integrate the data obtained from soil, crop repository, weather department and by applying machine learning algorithm: Multiple Linear Regression, a prediction of most suitable crops according to current environmental conditions is made.
This provides a farmer with variety of options of crops that can be cultivated.
The business logic is mlr_algo.py directory. The server is programmed using node.js.
Python package Stack: scikit-learn, pandas. Web development technologies: HTML, CSS, JavaScript,ReactJS.

cropDB.csv(header) - Crop,Duration,Min Temp,Max Temp,PH min,PH max,Rainfall min,Rainfall max,N,P,K
temprainfall.csv(header) - Place,State,Month,Max temp,Min temp,Rainfall
nutrientsarea.csv(header) - State,N,P,K,PH
official datasets - data.gov.in
soil data - https://soilhealth.dac.gov.in/
