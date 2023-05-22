let Number = parseInt(prompt("Введіть число від 1 до 7"));

let Name;

switch (Number) {
    case 1:
        Name = "Понеділок";
        break;
    case 2:
        Name = "Вівторок";
        break;
    case 3:
        Name = "Середа";
        break;
    case 4:
        Name = "Четверг";
        break;
    case 5:
        Name = "П'ятниця";
        break;
    case 6:
        Name = "Субота";
        break;
    case 7:
        Name = "Неділя";
        break;
    default:
        Name = "Некоректне число";
}

document.write("День неділі, якому відповідає задане число " + Number + ": " + Name);
