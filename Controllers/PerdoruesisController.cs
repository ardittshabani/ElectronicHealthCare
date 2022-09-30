using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectronicHealthCare.Models;

namespace ElectronicHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerdoruesisController : ControllerBase
    {
        private readonly EhrDbContext _context;

        public PerdoruesisController(EhrDbContext context)
        {
            _context = context;
        }

        // GET: api/Perdoruesis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Perdoruesi>>> GetPerdoruesis()
        {
            return await _context.Perdoruesis.ToListAsync();
        }

        // GET: api/Perdoruesis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Perdoruesi>> GetPerdoruesi(int id)
        {
            var perdoruesi = await _context.Perdoruesis.FindAsync(id);

            if (perdoruesi == null)
            {
                return NotFound();
            }

            return perdoruesi;
        }

        // PUT: api/Perdoruesis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerdoruesi(int id, Perdoruesi perdoruesi)
        {
            if (id != perdoruesi.PerdoruesiId)
            {
                return BadRequest();
            }

            _context.Entry(perdoruesi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PerdoruesiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Perdoruesis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Perdoruesi>> PostPerdoruesi(Perdoruesi perdoruesi)
        {
            _context.Perdoruesis.Add(perdoruesi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerdoruesi", new { id = perdoruesi.PerdoruesiId }, perdoruesi);
        }

        // DELETE: api/Perdoruesis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerdoruesi(int id)
        {
            var perdoruesi = await _context.Perdoruesis.FindAsync(id);
            if (perdoruesi == null)
            {
                return NotFound();
            }

            _context.Perdoruesis.Remove(perdoruesi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PerdoruesiExists(int id)
        {
            return _context.Perdoruesis.Any(e => e.PerdoruesiId == id);
        }
    }
}
