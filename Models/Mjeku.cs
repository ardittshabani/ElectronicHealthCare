using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Mjeku
    {
        public Mjeku()
        {
            DiagnozaMjekus = new HashSet<Diagnoza>();
            DiagnozaPacientis = new HashSet<Diagnoza>();
            TerminiMjekus = new HashSet<Termini>();
            TerminiPacientis = new HashSet<Termini>();
        }

        public int MjekuId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public DateTime? DataLindjes { get; set; }
        public string Email { get; set; } = null!;
        public int? Telefoni { get; set; }

        public virtual ICollection<Diagnoza> DiagnozaMjekus { get; set; }
        public virtual ICollection<Diagnoza> DiagnozaPacientis { get; set; }
        public virtual ICollection<Termini> TerminiMjekus { get; set; }
        public virtual ICollection<Termini> TerminiPacientis { get; set; }
    }
}
