## To generate the models

sequelize-auto -o "./models" -d millborn_v001 -h localhost -u root -p 3306 -x '' -e mysql -a "./a
dditionalconfig.json"

sequelize-auto -o "./models" -d millborn_v001 -h bamboo.arvixe.com -u millborn -p 3306 -x 'mb@123
' -e mysql -a "./additionalconfig.json"