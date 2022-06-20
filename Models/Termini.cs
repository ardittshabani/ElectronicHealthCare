using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Termini
    {
        public int TerminiId { get; set; }
        public int? MjekuId { get; set; }
        public int? PacientiId { get; set; }
        public DateTime DataTerminit { get; set; }
        public TimeSpan Koha { get; set; }

        public virtual Mjeku? Mjeku { get; set; }
        public virtual Mjeku? Pacienti { get; set; }
    }
}
