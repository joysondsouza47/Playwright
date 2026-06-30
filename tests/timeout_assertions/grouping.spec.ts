import{test,expect,Locator} from "@playwright/test"


test.beforeAll("Page URL",async()=>{
    console.log("URL");
})

test.afterAll("Page Close",async()=>{
    console.log("Page Close");
})

test.beforeEach("page login",async()=>{
    console.log("login");
})

test.afterEach("page Logout",async()=>{
    console.log("logout");
})

//only is used when we want to run only certain test cases can be used on group or test case level.
//fixme is used when we want to ignore any test which is still not ready for testing, works on both group and each test case level.
//skip is used if we want to skip any particular test case or test group.
//fail is used if we want to fail any particular test case, works only on individual test cases.

test.describe("Gropu 1", async()=>{  

// test.beforeAll("Page URL",async()=>{
//     console.log("URL");
// })

// test.afterAll("Page Close",async()=>{
//     console.log("Page Close");
// })
   

    test("@sanity Test 1", async({page})=>{
        console.log("This is my Test 1");
    })

    test("@regression Test 2", async({page})=>{
        console.log("This is my Test 2");
    })

    test("@sanity @regression Test 3", async({page})=>{
        console.log("This is my Test 3");
    })

})

test.describe("@smoke Group 2", async()=>{

    test("@sanity Test 4", async({page})=>{
        console.log("This is my Test 4");
    })

    test("@regression Test 5", async({page})=>{
        console.log("This is my Test 5");
    })

    test("@sanity @regression Test 6", async({page})=>{
        console.log("This is my Test 6");
    })

})


// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@sanity"    T1 T3 T4 T6
// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@regression"  T2 T3 T5 T6
// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@sanity @regression" T3 T6
// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@sanity|@regression" T1 T2 T3 T4 T5 T6 
// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@sanity" --grep-invert "@regression"   T1 T4
// npx playwright test timeout_assertions/grouping.spec.ts --headed --grep "@smoke" T4 T5 T6
