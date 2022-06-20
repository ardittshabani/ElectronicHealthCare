using System;
using System.Collections.Generic;

namespace ElectronicHealthCare.Models
{
    public partial class Diagnoza
    {
        public int DiagnozaId { get; set; }
        public int? MjekuId { get; set; }
        public int? PacientiId { get; set; }

        public virtual Mjeku? Mjeku { get; set; }
        public virtual Mjeku? Pacienti { get; set; }
    }
}
