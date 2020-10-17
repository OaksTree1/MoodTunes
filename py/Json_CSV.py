import json
import csv

#class to take json type data

class Json_CSV:

     def WritetoCSV(self, jsonInputpath, csvPath):
        jsonfield = []
        jsontoRows = [[]]

        with open(jsonInputpath) as read:
            inputData = json.load(read)

        for items in inputData.keys():
            jsonfield.append(str(items))

        for i in range(0, len(inputData.values()[0]), 1):
                jsontoRows.append([str(inputData[str(inputData.keys()[0])][i]),
                                   str(inputData[str(inputData.keys()[1])][i]),
                                   str(inputData[str(inputData.keys()[2])][i]),
                                   str(inputData[str(inputData.keys()[3])][i])])
        jsontoRows.remove([])

        with open(csvPath, "w") as sheet_CSV:
            csvWrite = csv.writer(sheet_CSV)
            csvWrite.writerow(jsonfield)
            csvWrite.writerows(jsontoRows)




jsonCall = Json_CSV()
jsonCall.WritetoCSV("assets/InputList.json", "assets/moodStart1_csv .csv")