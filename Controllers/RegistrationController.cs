using ElectronicHealthCare.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ElectronicHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("Registration")]
        public String registration(Perdoruesi perdoruesi)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO Perdoruesi (username, pasword) VALUES('"+perdoruesi.Username+"','"+perdoruesi.Pasword+"')", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();    
            if (i > 0) {
                return "Data Inserted";
            }
            else
            {
                return "Error";
            }
            
        }
    }
}
