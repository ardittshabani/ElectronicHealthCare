using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Pacienti
    {
        public int PacientiId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public DateTime? DataLindjes { get; set; }
        public string Email { get; set; } = null!;
        public int? Telefoni { get; set; }
    }
}
