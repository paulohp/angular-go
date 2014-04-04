package models

type Jobs struct {
    Id int `json:"id"`
    
    Title string `json:"title"`
  
    Apply_email string `json:"apply_email"`
  
    Company_description string `json:"company_description"`
  
    Company_name string `json:"company_name"`
  
    Contact string `json:"contact"`
  
    Description string `json:"description"`
  
    Terms bool `json:"terms"`
  
}
