function main() {
    'use strict';
    let money, time;
    
    function start() {
        money = prompt("Ваш бюджет на месяц");
        time = prompt("Введите дату в формате YYYY-MM-DD"); 
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц");
        }
    }

    start();

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpanses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");
    
                if ((typeof (a)) === 'string' && a != null && b != null &&
                    a != '' && b != '' && a.length < 50) {
                    console.log("Верно!");
                    appData.expenses[a] = b;
                } else {
                    alert("Не делай так больше! :)");
                    i--;
                    continue;
                }
            }
        },
        chooseOptExpenses: function() {
            for (let i = 0; i < 3; i++) {
                let a = prompt("Введите необязательную статью расходов в этом месяце", "");
    
                if (typeof (a) === 'string' && (a != null)  && a != '' && a.length < 50) {
                    appData.optionalExpenses[i + 1] = a;
                } else {
                    --i;
                }
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed(2);
            alert("Ваш ежедневный бюджет = " + appData.moneyPerDay);   
        },
        detectLevel: function() {
            if ( appData.moneyPerDay < 100 ) {
                console.log("Минимальный уровень достатка");
            } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
                console.log("Средний уровень достатка");
            } else if ( appData.moneyPerDay > 2000 ) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Не делай так больше! :)");
            }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save, percent;
                while (isNaN(save) || save == "" || save == null) {
                    save = +prompt("Ваша сумма накоплений?", "");
                }
                while (isNaN(percent) || percent == "" || percent == null) {
                    percent = +prompt("Ваша процентная ставка?", "");
                }
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
            }
        },
        chooseIncome: function() {
            let items;

            while ( (typeof(items) !== 'string') || (items == null) || items == '' ) {
                items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
            }

            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
            console.log("Способы доп. заработка: ");
            appData.income.forEach(function(item, i) {
                console.log((i+1) + ' - ' + item);
            });
            
        }
    };
    appData.chooseIncome();
    for (let key in appData) {
        console.log("Наша программа включает в себя данные:" + key + " : " + appData[key]);
    }        
    
}
main();