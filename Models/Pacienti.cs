using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Pacienti
    {
        public int PacientiId { get; set; }
        public string? Emri { get; set; }
        public string? Mbiemri { get; set; }
        public string? Gjinia { get; set; }
        public int? NrTelefonit { get; set; }
        public string? Email { get; set; }
        public string? Rruga { get; set; }
        public string? Qyteti { get; set; }
        public int? ZipKodi { get; set; }
        public string? GrupiGjakut { get; set; }
        public float? Gjatesia { get; set; }
        public float? Pesha { get; set; }

        public virtual Perdoruesi PacientiNavigation { get; set; } = null!;
    }
}
