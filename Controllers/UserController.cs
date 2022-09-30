using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ElectronicHealthCare.Models;
using System.Data;
using Microsoft.EntityFrameworkCore;


namespace ElectronicHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("user")]   
        public int login(String username, String pasword)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            con.Open();
            SqlCommand sqlCommand = new SqlCommand("SELECT perdoruesiId FROM Perdoruesi WHERE username = '"+username+"' AND pasword ='"+pasword+"'",con);
            int result = (int)sqlCommand.ExecuteScalar();
            con.Close();
            if(result == 0)
            {
                throw new Exception("Error");
            }
            return result;
        }
           
    }
}
