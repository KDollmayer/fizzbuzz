const {toDateString} = require("./date")

 test('should isodate to dateobject', () => { 
     expect(toDateString("2022-02-02")).toBe(new Date(2022,2-1,2).getTime() + (3600 * 1000))
  })

  