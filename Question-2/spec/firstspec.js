describe('To test customer', () => {
    let cust = null;
    it('check name is of valid format', () => {
        const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","1234567890","850");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });
 
    it('should check name has min 5 characters', () => {
        const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","1234567890","850");
        expect(cust.name.length).toBe(5);
        
    });
   it('should check mail is proper', () => {
    const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","1234567890","850");
     
        expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");    
    
        
    });
    it('should check phone number', () => {
        const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","1234567890","850");
        expect(cust.phone.length).toBe(10);
        
    });
   it('should check bill amount is min 500', () => {
        const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","8281268966","850");
       expect(cust.billAmount).toBeGreaterThan(500);
        
    });
    it('should check date', () => {
        const cust = new customer("Neema", "neema@gmail.com" , "11-12-2020","1234567890","850");
        
            expect(cust.billDate).toBe('11-12-2020');
            
        });
});
