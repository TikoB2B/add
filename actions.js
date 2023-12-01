<html>

  

</html>

HELP = """
help - список команд
add - добавить задачу
show - показать задачи
"""
run = True
tasks = []
today = []
tomorrow = []
other = []

while run:

  comandes = input("Введите команду: ")
  if comandes == "help":
    print(HELP)
  elif comandes == "show":
    print("Все задачи: ", tasks)
    print("Задачи на сегодня: ", today)
    print("Задачи на завтра: ", tomorrow)
    print("Задачи на другие дни: ", other)
  elif comandes == "add":
    run1 = True
    while run1:
      task = input ("Введите задачу: ")
      date = input ("Введите дату: ")
      if date == "Сегодня":
        today.append(task)
        tasks.append(task) 
      elif date == "Завтра":
          tomorrow.append(task) 
          tasks.append(task) 
      else:
          other.append(task) 
          tasks.append(task) 
      if task == "Стоп":
        del tasks[-1]  
        del other[-1]          
        print("Все задачи добавлены!") 
        break
      print('Добавьте ещё одну задачу или введите "Стоп"')
  elif comandes == "exit":
    print("Спасибо за использование! До свидания!")
    run = False
  else:
    print("Команда неизвестна. Введите заново")
    # run = False