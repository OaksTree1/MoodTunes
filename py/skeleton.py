import numpy as np
import math
import matplotlib
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder, LabelEncoder, StandardScaler
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
import pandas as pd

#basic outline for early ML

#take dataset from either mood input or spotify API user info

inputdataSet = pd.read_csv("dataset")

IndV = inputdataSet.iloc[:, :-1].values
DeV = inputdataSet.iloc[:, -1].values

#takes empty variables in dataset and returns given output
imputer = SimpleImputer(missing_values = np.nan, strategy = 'median')
imputer.fit(IndV[:, 1:3])
IndV[:, 1:3] = imputer.transform(IndV[:, 1:3])

#transforms categorical variables into binary data for ML model -- necessary for our inputs
ct = ColumnTransformer(transformers=[("encoder", OneHotEncoder(),[0])], remainder='passthrough')
le = LabelEncoder()
DeV = le.fit_transform(DeV)
IndV = np.array(ct.fit_transform(IndV))

#use initial inputs from user data as a training model for future model -- wont be necessary when we move to neural network
indv_Train, indv_Test, dev_Train, dev_Test = train_test_split(IndV, DeV, test_size= 0.2, random_state= 1)
sc = StandardScaler()

#fit will find the means and SDs of the features
#transform will apply the standarization equation
indv_Train[:, 3:] = sc.fit_transform(indv_Train[:, 3:])
#only transform because we are using fit congruent with training scaler
indv_Test[:, 3:] = sc.transform(indv_Test[:,3:])

#can be used for datasets with one independent variable -- we will use polynomial regression more likely
lr = LinearRegression()
lr.fit(indv_Train, dev_Train)
lPred = lr.predict(indv_Test)

