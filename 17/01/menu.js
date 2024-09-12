export default async function choiseMenu(menuName)
{
    switch(menuName)
    {
        case "mainMenu":
            const viewStartMenu = await import("./viewMainForm.js");
            break;
        case "warehuoseMenu":
            const viewWarehouseMenu = await import("./warehouse.js");
            break;
        default:
            alert("Вы ввели не верное название меню, повторите ввод!")        
    }
}