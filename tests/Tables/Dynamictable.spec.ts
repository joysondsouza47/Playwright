import {test,expect,Locator} from "@playwright/test"


test("dynamic table", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const dynamictable:Locator = page.locator("table#taskTable tbody");

    const rows:Locator[] = await dynamictable.locator(" tr").all();


    console.log(await rows[1].allInnerTexts());


let CPUvalue;
let Diskvalue;
let Netwrokvalue;
let Memoryvalue;

for(const row of rows)

    {
        const name:string = await row.locator("td").nth(0).innerText()

        if(name==='Chrome')
        {
            CPUvalue = await row.locator("td:has-text('%')").innerText();
            Netwrokvalue = await row.locator("td:has-text('Mbps')").innerText();
        }
        else if(name ==='Firefox')
        {
            Memoryvalue = await row.getByText(/MB$/).innerText();
            Diskvalue = await row.locator("td:has-text('MB/s')").innerText();
        }
    }

const CPUwebvalue:string = await page.locator("strong.chrome-cpu").innerText();
const Diskwebvalue:string = await page.locator("strong.firefox-disk").innerText();
const Netwrokwebvalue:string = await page.locator("strong.chrome-network").innerText();
const Memorywebvalue:string = await page.locator("strong.firefox-memory").innerText();

console.log("CPU value: ",CPUvalue , "\nCPU web value: " ,CPUwebvalue);
console.log("Disk value: ",Diskvalue , "\nDisk web value: " ,Diskwebvalue);
console.log("Netwrok value: ",Netwrokvalue , "\nNetwrok web value: " ,Netwrokwebvalue);
console.log("Memory value: ",Memoryvalue , "\nMemory web value: " ,Memorywebvalue);

expect(CPUvalue).toContain(CPUwebvalue);
expect(Diskvalue).toContain(Diskwebvalue);
expect(Netwrokvalue).toContain(Netwrokwebvalue);
expect(Memoryvalue).toContain(Memorywebvalue);




})