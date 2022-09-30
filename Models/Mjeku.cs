using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Mjeku
    {
        public int MjekuId { get; set; }
        public string? Emri { get; set; }
        public string? Mbiemri { get; set; }
        public string? Gjinia { get; set; }
        public int? NrTelefonit { get; set; }
        public string? Email { get; set; }
        public string? Rruga { get; set; }
        public string? Qyteti { get; set; }
        public int? ZipKodi { get; set; }
        public string? Specializimi { get; set; }
        public string? Statusi { get; set; }

        public virtual Perdoruesi MjekuNavigation { get; set; } = null!;
    }
}
