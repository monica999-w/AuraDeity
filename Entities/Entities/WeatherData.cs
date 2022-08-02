using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class WeatherData : BaseModel
    {
        public string City { get; set; }
        public string Country { get; set; }
        public string Description { get; set; }
        public int Temperature  { get; set; }

        [ForeignKey("UserAuthEntityID")]
        public UserAuthEntity UserAuthEntity { get; set; }

    }
}
