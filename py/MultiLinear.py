import matplotlib as plt
# import statsmodels.api as sm
plt.use("TkAgg")
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer, make_column_transformer
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

dataset = pd.read_csv("assets/moodstart2_csv.csv")

dataset['mood'] = dataset['mood'].astype(bool)

indV = dataset.iloc[:, 1:].values
deV = dataset.iloc[:, 0].values


print(indV)

# OHE = make_column_transformer((OneHotEncoder(categories='auto'), [1, 2]), remainder="passthrough")

OHE = ColumnTransformer(transformers=[("encoder", OneHotEncoder(), [1])], remainder="passthrough")
indV = np.array(OHE.fit_transform(indV))

le = LabelEncoder()
deV = le.fit_transform((deV))

print(indV)

#below commented out as i dropped my own dummy variable
# X = indV[:, 1:]

#will be 3 additional columns added as part of encoding as each categorical variable is given a column

indv_Train, indv_Test, dev_Train, dev_Test = train_test_split(indV, deV, test_size=0.2, random_state=0)

# dont have to worry about dummy variable trap or statisticalL significance measures (take care of by class)
lr = LinearRegression()
lr.fit(indv_Train, dev_Train)
dev_Predict = lr.predict(indv_Test)
print(lr.intercept_)
np.set_printoptions(precision=2)
#numpy array can be reshaped with the same data; for comparison takes predicted data through best fit line vs actual data and concatenates horizontally
print(np.concatenate((dev_Predict.reshape(len(dev_Predict), 1), dev_Test.reshape(len(dev_Test), 1)),1))
print(np.concatenate((dev_Predict, dev_Test),0))

# Backwards elimination process shown below but Sklearn will take care of this automatically

X = np.append(arr = np.ones((50, 1)).astype(int), values s= X, axis = 1)
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





