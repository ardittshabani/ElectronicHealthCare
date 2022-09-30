using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Perdoruesi
    {
        public int PerdoruesiId { get; set; }
        public string? Username { get; set; }
        public string? Pasword { get; set; }

        public virtual Mjeku Mjeku { get; set; } = null!;
        public virtual Pacienti Pacienti { get; set; } = null!;
    }
}
