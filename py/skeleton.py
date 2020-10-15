import numpy as np
import math
import matplotlib
import statsmodels.api as sm
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

# multi-Linear regression model with backward elimination

dataset = pd.read_csv("/Users/henoktesfaye/Documents/Datasets/moodStart.csv")

indV = dataset.iloc[:, :-1].values
deV = dataset.iloc[:, -1].values

OHE = ColumnTransformer(transformers=[("encoder", OneHotEncoder(), [3])], remainder="passthrough")

indV = np.array(OHE.fit_transform(indV))

#fixing dummy variable trap for custom backwards elimination
X = indV[:, 1:]
print(X)

#will be 3 additional columns added as part of encoding as each categorical variable is given a column

indv_Train, indv_Test, dev_Train, dev_Test = train_test_split(indV, deV, test_size=0.2, random_state=0)

# dont have to worry about dummy variable trap or statistical significance measures (take care of by class)
lr = LinearRegression()
lr.fit(indv_Train, dev_Train)
dev_Predict = lr.predict(indv_Test)
print(lr.intercept_)
np.set_printoptions(precision=2)
#numpy array can be reshaped with the same data; for comparison takes predicted data through best fit line vs actual data and concatenates horizontally
print(np.concatenate((dev_Predict.reshape(len(dev_Predict), 1), dev_Test.reshape(len(dev_Test), 1)),1))
print(np.concatenate((dev_Predict, dev_Test),0))

#Backwards elimination process shown below but Sklearn will take care of this automatically

X = np.append(arr = np.ones((50, 1)).astype(int), values = X, axis = 1)
X_opt = X[:, [0, 1, 2, 3, 4, 5]]
X_opt = X_opt.astype(np.float64)
lr_OLS = sm.OLS(endog = deV, exog = X_opt).fit()
lr_OLS.summary()
X_opt = X[:, [0, 1, 3, 4, 5]]
X_opt = X_opt.astype(np.float64)
lr_OLS = sm.OLS(endog = deV, exog = X_opt).fit()
lr_OLS.summary()
X_opt = X[:, [0, 3, 4, 5]]
X_opt = X_opt.astype(np.float64)
lr_OLS = sm.OLS(endog = deV, exog = X_opt).fit()
lr_OLS.summary()
X_opt = X[:, [0, 3, 5]]
X_opt = X_opt.astype(np.float64)
lr_OLS = sm.OLS(endog = deV, exog = X_opt).fit()
lr_OLS.summary()
X_opt = X[:, [0, 3]]
X_opt = X_opt.astype(np.float64)
lr_OLS = sm.OLS(endog = deV, exog = X_opt).fit()
print(lr_OLS.summary())


